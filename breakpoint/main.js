import http from "k6/http";

/**
 * @type {import('k6/options').Options}
 */
export const options = {
  scenarios: {
    ramping: {
      // https://k6.io/docs/using-k6/scenarios/executors/ramping-arrival-rate/
      executor: "ramping-arrival-rate",
      preAllocatedVUs: 100,
      stages: [{ duration: "30m", target: 1e6 }],
    },
  },
};

export default () => {
  const urlRes = http.get(__ENV.BASE_URL);
};
