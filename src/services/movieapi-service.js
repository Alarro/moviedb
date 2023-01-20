export default class MovieDBApi {
    async getResource(searchInput, page) {
        const res = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=9ffe47a30e45194b61f00b551e76005c&language=en-US&query=${searchInput}&page=${page}&include_adult=false`
        );
    
        if (!res.ok) {
          throw new Error(`Could not fetch received ${res.status}`);
        }
        const dataObject = await res.json();
        let newArr = [];
        newArr.push(dataObject.results);
        newArr.push(dataObject.total_pages);
    
        return newArr;
      }
    
      async createGuestSession() {
        const res = await fetch(
          'https://api.themoviedb.org/3/authentication/guest_session/new?api_key=9ffe47a30e45194b61f00b551e76005c'
        );
    
        if (!res.ok) {
          throw new Error(`Could not fetch received ${res.status}`);
        }
        return await res.json();
      }
    
      async rateFilm(id, value, sessionId) {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/rating?api_key=9ffe47a30e45194b61f00b551e76005c&guest_session_id=${sessionId}`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify({
              value,
            }),
          }
        );
    
        return await res.json();
      }
    
      async getRated(sessionId, page) {
        const res = await fetch(
          `
    https://api.themoviedb.org/3/guest_session/${sessionId}/rated/movies?api_key=9ffe47a30e45194b61f00b551e76005c&language=en-US&sort_by=created_at.asc&page=${page}`
        );
        const dataObject = await res.json();
        let newArr = [];
        newArr.push(dataObject.results);
        newArr.push(dataObject.total_pages);
        return newArr;
      }
    
      async getGenres() {
        const res = await fetch(
          'https://api.themoviedb.org/3/genre/movie/list?api_key=9ffe47a30e45194b61f00b551e76005c&language=en-US'
        );
        const dataObject = await res.json();
        return dataObject.genres;
      }
    }