const SideCard = ({ img, tag, content }) => {
  return (
    <div className="flex gap-5 items-start py-1 cursor-pointer">
      <img
        src={img}
        className="w-1/4 aspect-square object-cover max-h-[80px]"
      />
      <div className="flex flex-1 flex-col w-2/3 text-sm tracking-[3.5px]">
        <p className="hover:underline"> {tag}</p>
        <p className="main-content tracking-wide leading-normal mt-2 text-[16px] fontLight hover:underline ">
          {content}
        </p>
      </div>
    </div>
  )
}

const SideCards = () => {
  return (
    <>
      <SideCard
        img={'https://picsum.photos/200/?random&dummyParam15'}
        tag="ENVIRONMENT"
        content="This is what the world could look like in 2070"
      />
      <SideCard
        img={'https://picsum.photos/200/?random&dummyParam1'}
        tag="SPACE"
        content="Cosmic wonders, black hole secrets"
      />

      <SideCard
        img={'https://picsum.photos/200/?random&dummyParam2'}
        tag="WILDLIFE"
        content="Rare moments, endangered lives"
      />

      <SideCard
        img={'https://picsum.photos/200/?random&dummyParam3'}
        tag="DISCOVERY"
        content="Unveiling ancient civilizations buried beneath the earth's surface"
      />

      <SideCard
        img={'https://picsum.photos/200/?random&dummyParam4'}
        tag="OCEANS"
        content="Deep ocean mysteries, unexplored depths"
      />

      <SideCard
        img={'https://picsum.photos/200/?random&dummyParam5'}
        tag="INNOVATION"
        content="Transforming agriculture for a more sustainable food future"
      />
    </>
  )
}
export default SideCards
