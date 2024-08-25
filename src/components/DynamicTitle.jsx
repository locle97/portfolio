import {useState, useEffect} from 'react';

function DynamicTitle ({ title }) {
  const [dynamicTitle, setDynamicTitle] = useState(title);

  useEffect(() => {
    document.title = dynamicTitle;
  }, [dynamicTitle]);

  return null;
}

export default DynamicTitle;
