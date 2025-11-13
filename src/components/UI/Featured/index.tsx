'use client';
import Image from 'next/image';
import newbig_banner from '../../../../public/images/newbig_banner.jpg';
import newmobile_banner from '../../../../public/images/newmobile_banner.jpg';
import ParallaxText from '@/components/Common/ParallaxImages';
import logo_image from '../../../../public/images/logo.png';
import { Wrapper, Inner, ImageContainer, ParallaxImages, Div } from './styles';
import RevealCover from '@/components/Common/RevealCover';
import { useIsMobile } from '../../../../libs/useIsMobile';
export const imageVariants = {
  hidden: {
    scale: 1.6,
  },
  visible: {
    scale: 1,
    transition: {
      duration: 1.4,
      ease: [0.6, 0.05, -0.01, 0.9],
      delay: 0.2,
    },
  },
};

const Featured = () => {
  const isMobile = useIsMobile();
  return (
    <Wrapper>
      <Inner>
        <ImageContainer>
          <RevealCover />
          <Div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.25, once: true }}
          >
            {isMobile ? (
              <Image
                src={newmobile_banner}
                alt="newmobile_banner"
                fill
              />
            ) : (
              <Image src={newbig_banner} alt="newbig_banner" fill />
            )}
          </Div>
        </ImageContainer>
        <h2>Featured and Seen in</h2>
        <ParallaxImages>
          <ParallaxText baseVelocity={-4}>
            <Image src={logo_image} alt="companies" />
          </ParallaxText>
        </ParallaxImages>
      </Inner>
    </Wrapper>
  );
};

export default Featured;
