import * as React from 'react';
import { Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Wrapped } from '~/components/Base/Wrapped';
import { IModalLayout } from '../data';
import C from './styles';

export const Modal: React.FC<IModalLayout> = ({
  flex,
  children,
  closeModal,
  bg = 'white',
  type = 'default',
  hasClosableButton = true,
  ...props
}) => {
  const insets = useSafeAreaInsets();
  const bottomInsets = insets.bottom || 2;

  if (type === 'transparent') {
    return (
      <C.ModalWrapped {...props} useNativeDriverForBackdrop useNativeDriver>
        <Wrapped mx={2} mt={3}>
          {children}
        </Wrapped>
      </C.ModalWrapped>
    );
  }

  if (type === 'full') {
    return (
      <C.ModalWrapped {...props} useNativeDriverForBackdrop useNativeDriver>
        <Wrapped flex={flex} bg={bg}>
          {hasClosableButton && (
            <Wrapped ml={1} mt={bottomInsets} onPress={closeModal} bg="clean">
              <C.CloseIcon />
            </Wrapped>
          )}
          {children}
        </Wrapped>
      </C.ModalWrapped>
    );
  }

  if (Platform.OS === 'ios') {
    return (
      <C.ModalWrapped
        {...props}
        pt={insets.top * 2}
        justifyContent="flex-end"
        useNativeDriverForBackdrop
        useNativeDriver>
        <C.ModalContent
          flex={flex}
          bg={bg}
          px={2}
          pt={hasClosableButton ? 2 : bottomInsets}
          pb={bottomInsets}>
          {hasClosableButton && (
            <Wrapped
              bg="clean"
              onPress={closeModal}
              alignSelf="flex-end"
              borderRadius="circle"
              p={1}
              mb={2}>
              <C.CloseIcon />
            </Wrapped>
          )}
          {children}
        </C.ModalContent>
      </C.ModalWrapped>
    );
  } else {
    return (
      <C.ModalWrapped
        {...props}
        pt={insets.top * 2}
        justifyContent="flex-end"
        useNativeDriverForBackdrop
        useNativeDriver>
        <C.ModalContent
          position="absolute"
          bottom={0}
          left={0}
          right={0}
          flex={flex}
          bg={bg}
          pt={hasClosableButton ? 2 : bottomInsets}
          pb={bottomInsets}>
          {hasClosableButton && (
            <Wrapped mb={2} onPress={closeModal} bg="clean">
              <C.CloseIcon />
            </Wrapped>
          )}
          {children}
        </C.ModalContent>
      </C.ModalWrapped>
    );
  }
};
