import { useEffect, useState } from "react";
import Card from "./ui/Card";
import { fetchData } from "./utils/fetcher";


const url = 'https://api.adviceslip.com/advice';

type initialProps = {
  slip: {
    id: number;
    advice: string;
  }
}

const initialState = {
  slip: {
    id: "",
    advice: ""
  }
}

const App = () => {
  const [data, setData] = useState<initialProps | any>(initialState);
  const [isLoading, setIsLoading] = useState(false);

  const getRandomAdvice = async () => {
    setIsLoading(true);
    try {
      const result = await fetchData(url);

      setData(result);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }

  }

  useEffect(() => {
    getRandomAdvice()
  }, [])

  return (
    <main className="bg-dark-blue-900 min-h-screen flex items-center justify-center">
      <Card id={data.slip?.id} advice={data.slip?.advice} onClick={getRandomAdvice} isLoading={isLoading} />
    </main>
  )
}



export default App;