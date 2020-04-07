const refs = {
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
};
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const switcher = {
  intervalId: null,
  isActive: false,

  onStartBtnClick() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    this.intervalId = setInterval(() => {
      const index = randomIntegerFromInterval(0, colors.length - 1);
      document.body.style.backgroundColor = colors[index];
    }, 1000);
  },

  onStopBtnClick() {
    clearInterval(this.intervalId);
    this.isActive = false;
  },
};

refs.startBtn.addEventListener(
  'click',
  switcher.onStartBtnClick.bind(switcher),
);
refs.stopBtn.addEventListener('click', switcher.onStopBtnClick.bind(switcher));
