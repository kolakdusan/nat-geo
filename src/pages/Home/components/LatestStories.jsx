import Title from '../../../components/Title/Title'
import GridTemplate from './GridTemplate/GridTemplate'

import heroImage from '../../../assets/latest-stories/heroImage.jpg'

const LatestStories = () => {
  return (
    <>
      <Title
        title="LATEST STORIES"
        hasDescription={true}
        description="Subscribe for full access to read stories from National Geographic"
      />

      <GridTemplate
        title={`TODAY'S PICKS`}
        isReversed={false}
        heroImage={heroImage}
      />

      {/* <div className="mt-32 h-[50vh] border-2 w-[1000px] flex items-center justify-center text-4xl">
        #TODO
      </div> */}
    </>
  )
}
export default LatestStories
