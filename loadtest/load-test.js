import http from 'k6/http';
import { check } from 'k6';

export const options = {
  duration: '2m',
  vus: 1000,  // Adjust based on desired RPS
  rps: 1000,  // Requests per second
};

export default function () {
  const res = http.get('http://a2a1bc1d2cf554f41b12348a74a3a60e-1243460673.us-east-1.elb.amazonaws.com//proxy?url=https://www.google.de/robots.txt');
  check(res, {
    'status is 200': (r) => r.status === 200,
  });
}
