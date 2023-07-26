import SomethingWeird from '@/components/SomethingWeird';
import React, { useEffect, useState } from 'react';
import Routes from '../../types/types';
import StepSequencer from '@/components/StepSequencer';
import About from './about';
import Work from './work';
import CopyEmail from '@/components/CopyEmail';

interface HomeProps {
  handleRoute: Routes['handleRoute'];
}

function Home({ handleRoute }: HomeProps) {
  const [index, setIndex] = useState(0);
  const headers = ['SOFTWARE DEVELOPER', 'CREATIVE', 'ANALYST'];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % headers.length);
    }, 3000);

    return () => clearInterval(timer);
  });

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <section id="home" className="flex min-h-screen w-full justify-between">
        <div className="flex w-full flex-col items-center justify-center">
          <h1 className="text-lg font-extrabold text-customLightPink">
            {headers[index]}
          </h1>
          <div className="mt-20 mb-14 h-fit w-full px-10">
            <svg
              viewBox="0 0 881 200"
              fill="#FEE9E1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M65.6073 63.4981C65.3046 57.161 63.8858 52.218 61.3508 48.6692C58.8536 45.1204 55.0511 43.346 49.9433 43.346C46.6894 43.346 44.022 44.0114 41.941 45.3422C39.8979 46.6096 38.3844 48.3523 37.4007 50.5703C36.417 52.7883 35.9062 55.3232 35.8684 58.1749C35.7927 60.5196 36.0386 62.6426 36.6062 64.5437C37.2115 66.3815 38.1574 68.0608 39.4438 69.5817C40.7303 71.0393 42.3761 72.3701 44.3814 73.5741C46.3867 74.7782 48.7704 75.8555 51.5324 76.8061L61.067 80.2281C67.4991 82.5095 73.0042 85.5196 77.5823 89.2586C82.1605 92.9975 85.9062 97.4018 88.8196 102.471C91.7329 107.478 93.8707 113.118 95.2328 119.392C96.6327 125.665 97.3516 132.51 97.3894 139.924C97.3516 152.725 95.4408 163.561 91.6573 172.433C87.8737 181.305 82.4632 188.055 75.4257 192.681C68.4261 197.307 60.0076 199.62 50.1703 199.62C40.0681 199.62 31.2524 197.117 23.7231 192.11C16.2316 187.104 10.4048 179.404 6.24291 169.011C2.11881 158.555 0.0378358 145.184 0 128.897H29.966C30.1551 134.854 31.0443 139.861 32.6334 143.916C34.2225 147.972 36.4548 151.046 39.3303 153.137C42.2437 155.228 45.7057 156.274 49.7163 156.274C53.0836 156.274 55.9024 155.577 58.1726 154.183C60.4427 152.788 62.1642 150.856 63.3372 148.384C64.5101 145.913 65.1154 143.093 65.1533 139.924C65.1154 136.946 64.529 134.347 63.3939 132.129C62.2967 129.848 60.4806 127.82 57.9456 126.046C55.4106 124.208 51.9864 122.497 47.6731 120.913L36.0954 116.73C25.804 112.991 17.6882 106.749 11.748 98.0038C5.84563 89.1952 2.91336 77.1863 2.95119 61.9772C2.91336 49.6198 4.88082 38.815 8.85358 29.5627C12.8642 20.2471 18.4071 12.9911 25.4824 7.79468C32.5956 2.59823 40.7492 0 49.9433 0C59.3266 0 67.4423 2.62991 74.2906 7.88974C81.1389 13.1496 86.417 20.564 90.1249 30.1331C93.8707 39.6388 95.7625 50.7605 95.8003 63.4981H65.6073Z"
                fill="#FEE9E1"
              />
              <path
                d="M126.27 197.338H92.2174L130.583 2.6616H173.716L212.081 197.338H178.029L152.603 56.2738H151.695L126.27 197.338ZM119.913 120.532H183.931V160.076H119.913V120.532Z"
                fill="#FEE9E1"
              />
              <path
                d="M214.486 2.6616H253.76L280.774 112.928H282.136L309.151 2.6616H348.425V197.338H317.551V84.7909H316.643L290.763 195.817H272.148L246.268 84.0304H245.36V197.338H214.486V2.6616Z"
                fill="#FEE9E1"
              />
              <path
                d="M423.375 2.6616H454.93V127.376C454.93 142.205 452.811 155.038 448.573 165.875C444.374 176.648 438.509 184.981 430.98 190.875C423.451 196.705 414.71 199.62 404.76 199.62C394.733 199.62 385.955 196.705 378.426 190.875C370.897 184.981 365.032 176.648 360.832 165.875C356.67 155.038 354.589 142.205 354.589 127.376V2.6616H386.144V122.814C386.144 128.834 386.939 134.221 388.528 138.973C390.117 143.663 392.312 147.338 395.111 150C397.949 152.662 401.165 153.992 404.76 153.992C408.392 153.992 411.608 152.662 414.408 150C417.208 147.338 419.402 143.663 420.991 138.973C422.58 134.221 423.375 128.834 423.375 122.814V2.6616Z"
                fill="#FEE9E1"
              />
              <path
                d="M461.137 197.338V2.6616H544.906V45.2472H492.692V78.7072H540.592V121.293H492.692V154.753H544.679V197.338H461.137Z"
                fill="#FEE9E1"
              />
              <path
                d="M551.765 197.338V2.6616H583.32V154.753H630.313V197.338H551.765Z"
                fill="#FEE9E1"
              />
              <path
                d="M657.327 197.338V2.6616H688.882V78.7072H730.652V2.6616H762.208V197.338H730.652V121.293H688.882V197.338H657.327Z"
                fill="#FEE9E1"
              />
              <path
                d="M881 100C881 121.673 878.484 139.956 873.452 154.848C868.42 169.677 861.628 180.925 853.077 188.593C844.526 196.198 834.992 200 824.473 200C813.879 200 804.307 196.166 795.756 188.498C787.243 180.767 780.47 169.487 775.438 154.658C770.444 139.766 767.947 121.546 767.947 100C767.947 78.327 770.444 60.076 775.438 45.2472C780.47 30.3549 787.243 19.1065 795.756 11.5019C804.307 3.83397 813.879 0 824.473 0C834.992 0 844.526 3.83397 853.077 11.5019C861.628 19.1065 868.42 30.3549 873.452 45.2472C878.484 60.076 881 78.327 881 100ZM848.537 100C848.537 88.3397 847.61 78.5171 845.756 70.5323C843.94 62.4842 841.234 56.4005 837.64 52.2814C834.084 48.0989 829.695 46.0076 824.473 46.0076C819.252 46.0076 814.844 48.0989 811.25 52.2814C807.693 56.4005 804.988 62.4842 803.134 70.5323C801.318 78.5171 800.41 88.3397 800.41 100C800.41 111.66 801.318 121.515 803.134 129.563C804.988 137.548 807.693 143.631 811.25 147.814C814.844 151.933 819.252 153.992 824.473 153.992C829.695 153.992 834.084 151.933 837.64 147.814C841.234 143.631 843.94 137.548 845.756 129.563C847.61 121.515 848.537 111.66 848.537 100Z"
                fill="#FEE9E1"
              />
            </svg>
          </div>

          <h5 className="w-full text-center text-xl text-customLightPink md:text-right">
            Passionate about building impactful products
          </h5>
        </div>
      </section>
      <div
        id="about"
        className="-mt-20 flex h-fit w-full flex-col items-center rounded-lg bg-customRed bg-opacity-90 pb-20"
      >
        <div className="w-full py-10 px-5">
          <h5 className="text-3xl">01</h5>
          <h1 className="underline-black p-5 text-5xl underline decoration-black decoration-double decoration-2">
            ABOUT ME
          </h1>
        </div>
        <div className="mx-10 w-fit rounded-xl bg-black bg-opacity-20 py-20">
          <About />
        </div>
      </div>
      <div
        id="work"
        className="flex w-full flex-col items-center rounded-lg py-20"
      >
        <div className="w-full rounded-lg bg-customGreen py-10 px-5">
          <h5 className="text-3xl ">02</h5>
          <h1 className="underline-black p-10 text-5xl underline decoration-black decoration-double decoration-2">
            WORK
          </h1>
        </div>
        <Work />
      </div>
      <div className="flex w-full flex-col items-center rounded-lg py-20">
        <div
          id="contact"
          className="w-full rounded-lg bg-customBlue py-10 px-5"
        >
          <h5 className="text-3xl">03</h5>
          <h1 className="underline-black  p-10 text-5xl underline decoration-black decoration-double decoration-2">
            CONTACT
          </h1>
          <div className="flex flex-col pt-5 md:p-10">
            <div className="rounded-lg bg-customBlack bg-opacity-10 p-5">
              <CopyEmail />
            </div>
            <div className="pt-5">
              <h3>Connect with me on :</h3>
              <div className="flex flex-col gap-2">
                <a
                  href="https://github.com/samuelho-dev"
                  aria-label="github"
                  target="_blank"
                  className="text-2xl text-customWhite underline decoration-customBlack underline-offset-4"
                >
                  LinkedIn
                </a>
                <a
                  href="https://www.linkedin.com/in/samuelho7/"
                  aria-label="linkedin"
                  target="_blank"
                  className="text-2xl text-customWhite underline decoration-customBlack underline-offset-4"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="beat"
        className="flex w-full  flex-col items-center rounded-lg bg-customPurple py-20  md:p-20"
      >
        <StepSequencer />
      </div>
    </div>
  );
}

export default Home;
