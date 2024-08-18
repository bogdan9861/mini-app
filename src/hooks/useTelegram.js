export const useTelegram = () => {
  return {
    tg: window.Telegram.WebApp,
    user: tg.initDataUnsafe?.user,
    isReady: tg.ready,
  };
};
