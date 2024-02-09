import Wrapper from '@/components/ui/wrapper';
import {
  carsGallery,
  officeGallery,
  maneuveringAreaGallery,
} from '@/lib/gallery-images';
import React from 'react';
import PhotoSlider from '@/components/gallery-page/photo-slider/photo-slider';

const Page = () => {
  return (
    <div className=''>
      <Wrapper style='left-1/2 -translate-x-1/2 p-0 flex-col '>
        <PhotoSlider
          imagesPaths={carsGallery.imgArr}
          title={carsGallery.title}
        />
        <PhotoSlider
          imagesPaths={officeGallery.imgArr}
          title={officeGallery.title}
        />
        <PhotoSlider
          imagesPaths={maneuveringAreaGallery.imgArr}
          title={maneuveringAreaGallery.title}
        />
      </Wrapper>
    </div>
  );
};

export default Page;
