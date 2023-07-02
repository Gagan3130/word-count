import { useEffect, useState } from 'react';
import Definitions from '../src/components/molecules/Definitions';
import DictionaryHeader from '../src/components/molecules/DictionaryHeader';
import Layout from '../src/components/organisms/Layout';
import { useDebounce } from '../src/lib/customHooks/useDebounce';

const Home = () => {
  const [word, setWord] = useState('');
  const [meanings, setMeanings] = useState([]);
  const [category, setCategory] = useState('en');
  const debouncedValue = useDebounce<string>(word)

  const dictionaryApi = async () => {
    try {
      const data = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`);
      const jsonData = await data.json();
      setMeanings(jsonData);
    } catch (error) {
      console.log(error);
      setMeanings([])
    }
  };

  useEffect(() => {
    dictionaryApi()
  }, [debouncedValue])


  return (
    <>
      <Layout>
        <DictionaryHeader
          setWord={setWord}
          word={word}
          category={category}
          setCategory={setCategory}
          setMeanings={setMeanings}
        />
        <Definitions meanings={meanings} word={word} category={category}/>
      </Layout>
    </>
  );
};
export default Home;
