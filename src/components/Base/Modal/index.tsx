import * as React from 'react';

import { Text } from '~/components/Base/Text';
import { useModal } from '~/hooks';

import { IModal } from '@/Modal';
import { Modal as Layout } from './Layout';

export const Modal: React.FC<IModal> = ({
  hasBackdrop = true,
  avoidKeyboard = false,
  ...props
}) => {
  const { closeModal } = useModal();

  const layoutProps = {
    ...props,
    avoidKeyboard,
    closeModal,
    isVisible: true,
    onBackButtonPress: hasBackdrop ? closeModal : () => {},
    onBackdropPress: hasBackdrop ? closeModal : () => {},
  };

  return <Layout {...layoutProps} />;
};

export const ModalTitle: React.FC = ({ children }) => (
  <Text font="medium" mb={1}>
    {children}
  </Text>
);

export const ModalDescription: React.FC = ({ children }) => (
  <Text size={4} mb={4}>
    {children}
  </Text>
);

export const ModalItem: React.FC = ({ children }) => (
  <Text mb={2}>{children}</Text>
);
