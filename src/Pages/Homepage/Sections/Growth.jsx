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
        image={
          'https://s3-alpha-sig.figma.com/img/f5ac/4fb8/a6d883d29bc37fab002d965ed86f0319?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HS6-SjlU1R9OPJ15VIBhbREBZXcqHrh4I8e4U-sl8BzA7rpTIYlb6lNJ5aJAqSlDRGgZzNU7-KIZVfeLWRKgEJNghmSIDUS6rCvxAYvpvUNKmDmjpM48zj0c~YaefLuTvXFVO0nCeBiJI1tQ7lac73WBf4DQce2DPdlPXSqSisS9K4vTF7fr04uSe1D2y-nvQGw6acZs2gEVTq96-AxeIZa3UQWjyiWf4tZe7sDjCoNutoxrR6p8Mp4PbjUCkWqclHCuiNFd8~enx7i65kjsyH2MdS95zktqGFSzwF0pHFHkbYBjKRZbSQZTPajFzr0K3QOxrK39wCekAE1bFXM5xQ__'
        }
      />
      <TextImageSection
        title={'Built to '}
        highlightedTitle={'convert perform'}
        description={
          'Cras porta, turpis quis pulvinar viverra, orci risus consequat velit, sit amet euismod lacus elit in urna.'
        }
        reverse={true}
        image={
          'https://s3-alpha-sig.figma.com/img/8286/1056/1c4f72d30364b6b535b1f705af5fca05?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=awwa5iWKt8n4~1NTcV28R-BB5Qcb~e9qc5m5YOwrEYyMT6U6yUe7YnZ9uiFPpMWY7lcLdz7Ac7SXeXXdo0A0esJqcsg49EEe5tj3J3P1teps8JMPm34nMEJkXTdNVr2sFWFXUv5zc20Fzw0UBM~DcMtLP-9JcQuBSOKwN-G3XFbivE5oUKQQwq6BT7VSN7FA9KnLpWlAe2rnAGxBdqL6jTEazfmQyYziQunqXTU6Q50EZoI1lVCkKZa9Ia5w3zxnGJYaQs5wNPamPP7uslfkVOLPa0ix396i3eV3WRaE-lLfKpIl~aaNhPXlVRBlU~qj8RU5A7gvzUMks4Xyd2aeeQ__'
        }
      />
    </div>
  );
};

export default Growth;
