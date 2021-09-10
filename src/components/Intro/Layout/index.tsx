import * as React from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';

import { Page, Wrapped, Text, Linear } from '~/components/Base';

import { IIntroLayout, ISlide, IItem, IButtonSlide } from '@/Intro';
import C from './styles';

const Button = ({ id, label, onPress }: IButtonSlide) => (
  <Wrapped center testID={id} {...{ onPress }}>
    <Wrapped bg="shadowBorder" px={4} py={2} borderRadius="circle">
      <Text color="white" font="medium">
        {label}
      </Text>
    </Wrapped>
  </Wrapped>
);

const Item = ({ image, title, text }: ISlide) => (
  <Wrapped flex={1}>
    <Wrapped flex={2} center>
      <C.Image source={image} />
    </Wrapped>
    <Wrapped flex={1} alignItems="center">
      <Text font="medium" size={7} mb={2} color="white">
        {title}
      </Text>
      <Text size={5} textAlign="center" color="white">
        {text}
      </Text>
    </Wrapped>
  </Wrapped>
);

export const Intro: React.FC<IIntroLayout> = ({ data, onTutorialDone }) => {
  const renderPagination = (activeIndex: number) => {
    return (
      <Wrapped position="absolute" bottom={0} left={0} right={0}>
        <Wrapped
          m={3}
          flexDirection="row"
          center
          justifyContent="center"
          alignItems="center">
          {data.length > 1 &&
            data.map((_, i) => (
              <Wrapped
                key={i}
                // @ts-ignore
                style={[
                  {
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    marginHorizontal: 4,
                  },
                  i === activeIndex
                    ? { backgroundColor: 'white', width: 20 }
                    : { backgroundColor: 'rgba(0, 0, 0, .2)' },
                ]}
              />
            ))}
        </Wrapped>
        <Wrapped>
          {data.length - 1 == activeIndex ? (
            <Button id="DoneButton" label="let's go" onPress={onTutorialDone} />
          ) : (
            <Button id="SkipButton" label="skip" onPress={onTutorialDone} />
          )}
        </Wrapped>
      </Wrapped>
    );
  };

  return (
    <Linear flex={1}>
      <Page bg={'transparent'} testID={'Intro'}>
        <AppIntroSlider
          data={data}
          onDone={onTutorialDone}
          onSkip={onTutorialDone}
          showSkipButton={true}
          renderPagination={renderPagination}
          renderItem={(props: IItem) => <Item {...props.item} />}
        />
      </Page>
    </Linear>
  );
};
