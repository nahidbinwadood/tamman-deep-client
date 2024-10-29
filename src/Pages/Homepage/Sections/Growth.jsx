import TextImageSection from './../../../Components/TextImageSection';

const Growth = () => {
  return (
    <div className="relative">
      <div className="size-[350px] -z-10 rounded-[348px] bg-gradient-to-l from-[#116DFF] to-[#23C0B6] blur-[350px] absolute top-0 left-0" />
      <div className="size-[350px] -z-10 rounded-[348px] bg-gradient-to-l from-[#116DFF] to-[#23C0B6] blur-[350px] absolute bottom-0 right-0" />
      <TextImageSection
        title={'Design that '}
        highlightedTitle={'drives growth'}
        description={
          'Streamline networking and brand management on-the-go with Quick Link. Manage contacts, schedule meetings, and showcase your products anytime, anywhere.'
        }
        image={'https://i.postimg.cc/qBYxTWB2/design-1.png'}
      />
      <TextImageSection
        title={'Built to '}
        highlightedTitle={'convert perform'}
        description={
          'Cras porta, turpis quis pulvinar viverra, orci risus consequat velit, sit amet euismod lacus elit in urna.'
        }
        reverse={true}
        image={'https://i.postimg.cc/Xn5QVNCq/design-2.png'}
      />
    </div>
  );
};

export default Growth;
