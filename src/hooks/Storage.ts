import { useAsyncStorage } from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'shapiro';

export const useStorage = () => {
  const { getItem, setItem } = useAsyncStorage(STORAGE_KEY);

  const getStorage = async (key?: string) => {
    try {
      const data = await getItem();

      const store = data && JSON.parse(data);

      if (store) return key ? store[key] : store;

      return {};
    } catch (error) {
      console.log({ error });
      console.log(`Error ao tentar ler ${key} do storage`);
      return {};
    }
  };

  const setStorage = async (key: string, value: any) => {
    try {
      const data = await getItem();

      if (data) {
        await setItem(
          JSON.stringify({
            ...JSON.parse(data || ''),
            [key]: value,
          })
        );
      } else {
        await setItem(JSON.stringify({ [key]: value }));
      }
    } catch (error) {
      console.log(`Error ao tentar salvar ${key} do storage`);
    }

    return value;
  };

  const cleanStorage = async () => {
    try {
      await setItem(JSON.stringify({}));
    } catch (error) {
      console.log(`Error ao tentar deletar storage`);
    }
  };

  return { getStorage, setStorage, cleanStorage };
};
