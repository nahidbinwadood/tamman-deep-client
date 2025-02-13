import Loader from '@/Components/Loaders/Loader';
import Product from '../Product';
import { GetAllCards } from '@/Hooks/Card.hook';

const CardContents = () => {
  const { allCards, isLoading } = GetAllCards();
  if (isLoading) {
    return (
      <div className="min-h-[50vh] col-span-8 flex items-center justify-center">
        <Loader />
      </div>
    );
  }
  return (
    <div className="col-span-8 p-5 rounded-xl border bg-white h-fit">
      <h4 className="font-normal text-textDark pb-4 ">
        List of Cards {allCards.length}
      </h4>

      <div className="space-y-3">
        {allCards?.map((item) => <Product key={item?.id} item={item} />) || (
          <p>No items found</p>
        )}
      </div>
    </div>
  );
};

export default CardContents;
