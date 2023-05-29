"use client"
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { fetchPhotosRequest, fetchPhotosSuccess, fetchPhotosFailure } from '../app/actions/imageActions';
import { fetchPhotos } from '../app/api/data/route';
import { ImageCardList } from './ImageCardList';
import LoadingSpinner from './LoadingSpinner';
import { Button } from '@mui/material';


const Feed = () => {
  const dispatch = useDispatch();
  const { photos, loading, error } = useSelector((state) => state.images)
  const [query, setQuery] = useState('');
  const [order, setOrder] = useState('');
  const [page, setPage] = useState(1);

  //State Change for Feed Actions
  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };
  const handleOrderChange = (e) => {
    setOrder(e.target.value);
  };

  const handlePageChange = (selectedPage) => {
    scrollToTop();
    setPage(selectedPage);
  };

  const scrollToTop = () => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  // Call for Populating the Feed
  const handleFetchPhotos = async () => {
    dispatch(fetchPhotosRequest(query,page, order));
    try {
      const fetchedPhotos = await fetchPhotos(query,page, order);
      dispatch(fetchPhotosSuccess(fetchedPhotos));
    } catch (error) {
      dispatch(fetchPhotosFailure(error));
    }
  };
  
  
  useEffect(() => {
    handleFetchPhotos();
  }, [query, page, order]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (loading && photos.length === 0) {
    return <LoadingSpinner />
  }

  const totalPages = 10;
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);


  return (
    <section className='feed'>
      <>
        <form className='relative w-full flex-center'>
          <input
            type='text'
            placeholder='Search'
            value={query}
            onChange={handleSearchChange}
            className='search_input peer'
            required
          />
          <select value={order} onChange={handleOrderChange} className='order_input'>
            <option value='latest'>Latest</option>
            <option value='oldest'>Oldest</option>
            <option value='popular'>Popular</option>
            <option value='views'>Views</option>
            <option value='downloads'>Downloads</option>
          </select>
        </form>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 4 }}
        >
          <ImageCardList images={photos} />

          <div className="pagination">
            <Button 
              disabled={page === 1}
              onClick={() => {
                  setPage(page - 1)
                  scrollToTop()
                }}
              >
                Previous
              </Button>
            {pages.map((pageNumber) => (
              <Button
              key={pageNumber}
              onClick={() => {
                handlePageChange(pageNumber)
                
              }}
              className={pageNumber === page ? 'active' : ''}
              disabled={pageNumber === page}
            >
              {pageNumber}
            </Button>
            ))}
            <Button 
              disabled={page === 10}
              onClick={() => {
                setPage(page + 1)
                scrollToTop()
              }}
            >
              Next
            </Button>
          </div>

        </motion.div>
      </>
  </section>
  );
};

export default Feed;