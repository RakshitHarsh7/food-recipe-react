import React, { useContext } from 'react'
import { GlobalContext } from '../../context'
import RecipeItem from '../../components/recipe-list';
import ReceipeItem from '../../components/recipe-list';

function Home() {

  const {receipeList, loading} = useContext(GlobalContext);

  if(loading) <div>Loading...Please wait!</div>

  return (
    <div className='py-8 container mx-auto flex flex-wrap justify-center gap-10'>
      {
        receipeList && receipeList.length > 0 ? receipeList.map((item) => <ReceipeItem item={item}/>)
        : <div>
          <p className='lg:text-4xl text-xl text-center text-black font-extrabold'>Nothing to show. Please search something</p>
        </div>
      } 
    </div>
  )
}

export default Home

