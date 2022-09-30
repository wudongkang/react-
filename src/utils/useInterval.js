  import {useEffect, useRef} from 'react'

  function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    });

    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

  export const foreachTree = (data, callback, childrenName = 'children') => {
  for (let i = 0; i < data.length; i++) {
    callback(data[i])
    if (data[i][childrenName] && data[i][childrenName].length > 0) {
      foreachTree(data[i][childrenName], callback, childrenName)
    }
  }
}
  export default useInterval
