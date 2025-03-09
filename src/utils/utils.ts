export const handleTopPageScroll = (e) => {
    if (window.location.pathname === '/') { 
      e.preventDefault(); 
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.history.replaceState({}, document.title, '/');
    }
  };
  