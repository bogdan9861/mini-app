export const useTelegram = () => {
  const tg = window.Telegram;

  return {
    rg: window.Telegram.WebApp,
    user: tg.initDataUnsafe?.user,
    isReady: tg.ready,
  };
};
