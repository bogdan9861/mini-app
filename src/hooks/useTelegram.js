export const useTelegram = () => {
  return {
    rg: window.Telegram.WebApp,
    user: tg.initDataUnsafe?.user,
    isReady: tg.ready,
  };
};
