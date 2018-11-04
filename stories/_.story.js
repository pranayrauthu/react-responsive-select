import React from 'react';

import { storiesOf } from '@storybook/react';

import '../demo/demo.css';

storiesOf('Welcome', module).add('Welcome', () => (
  <div>
    <div className="logos">
      <a
        title="View on NPM"
        className="npm-link"
        href="https://www.npmjs.com/package/react-responsive-select"
      >
        <svg width="45px" height="25px" viewBox="0 0 18 7">
          <path fill="#CB3837" d="M0,0v6h5v1h4v-1h9v-6" />
          <path
            fill="#FFF"
            d="M1,1v4h2v-3h1v3h1v-4h1v5h2v-4h1v2h-1v1h2v-4h1v4h2v-3h1v3h1v-3h1v3h1v-4"
          />
        </svg>
      </a>

      <a
        title="View on Github"
        className="github-link"
        href="https://github.com/benbowes/react-responsive-select/"
      >
        <svg
          x="0px"
          y="0px"
          width="25px"
          height="25px"
          viewBox="0 0 438.549 438.549"
        >
          <g>
            <path
              d="M409.132,114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736,15.166,259.057,5.365,219.271,5.365
        		c-39.781,0-76.472,9.804-110.063,29.408c-33.596,19.605-60.192,46.204-79.8,79.8C9.803,148.168,0,184.854,0,224.63
        		c0,47.78,13.94,90.745,41.827,128.906c27.884,38.164,63.906,64.572,108.063,79.227c5.14,0.954,8.945,0.283,11.419-1.996
        		c2.475-2.282,3.711-5.14,3.711-8.562c0-0.571-0.049-5.708-0.144-15.417c-0.098-9.709-0.144-18.179-0.144-25.406l-6.567,1.136
        		c-4.187,0.767-9.469,1.092-15.846,1c-6.374-0.089-12.991-0.757-19.842-1.999c-6.854-1.231-13.229-4.086-19.13-8.559
        		c-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559
        		c-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-0.951-2.568-2.098-3.711-3.429c-1.142-1.331-1.997-2.663-2.568-3.997
        		c-0.572-1.335-0.098-2.43,1.427-3.289c1.525-0.859,4.281-1.276,8.28-1.276l5.708,0.853c3.807,0.763,8.516,3.042,14.133,6.851
        		c5.614,3.806,10.229,8.754,13.846,14.842c4.38,7.806,9.657,13.754,15.846,17.847c6.184,4.093,12.419,6.136,18.699,6.136
        		c6.28,0,11.704-0.476,16.274-1.423c4.565-0.952,8.848-2.383,12.847-4.285c1.713-12.758,6.377-22.559,13.988-29.41
        		c-10.848-1.14-20.601-2.857-29.264-5.14c-8.658-2.286-17.605-5.996-26.835-11.14c-9.235-5.137-16.896-11.516-22.985-19.126
        		c-6.09-7.614-11.088-17.61-14.987-29.979c-3.901-12.374-5.852-26.648-5.852-42.826c0-23.035,7.52-42.637,22.557-58.817
        		c-7.044-17.318-6.379-36.732,1.997-58.24c5.52-1.715,13.706-0.428,24.554,3.853c10.85,4.283,18.794,7.952,23.84,10.994
        		c5.046,3.041,9.089,5.618,12.135,7.708c17.705-4.947,35.976-7.421,54.818-7.421s37.117,2.474,54.823,7.421l10.849-6.849
        		c7.419-4.57,16.18-8.758,26.262-12.565c10.088-3.805,17.802-4.853,23.134-3.138c8.562,21.509,9.325,40.922,2.279,58.24
        		c15.036,16.18,22.559,35.787,22.559,58.817c0,16.178-1.958,30.497-5.853,42.966c-3.9,12.471-8.941,22.457-15.125,29.979
        		c-6.191,7.521-13.901,13.85-23.131,18.986c-9.232,5.14-18.182,8.85-26.84,11.136c-8.662,2.286-18.415,4.004-29.263,5.146
        		c9.894,8.562,14.842,22.077,14.842,40.539v60.237c0,3.422,1.19,6.279,3.572,8.562c2.379,2.279,6.136,2.95,11.276,1.995
        		c44.163-14.653,80.185-41.062,108.068-79.226c27.88-38.161,41.825-81.126,41.825-128.906
        		C438.536,184.851,428.728,148.168,409.132,114.573z"
            />
          </g>
        </svg>
      </a>
    </div>

    <div className="heading-area centered">
      <div className="heading-area__wrapper">
        <div className="logo-wrapper">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="75%"
            height="75%"
            viewBox="0 0 2340 1685"
          >
            <g opacity="0.8">
              <path
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="40"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                d="
          		M2320,340c0,55-45,100-100,100H124c-55,0-100-45-100-100V120C24,65,69,20,124,20h2096c55,0,100,45,100,100V340z"
              />
            </g>
            <g opacity="0.8">
              <path
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="40"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                d="
          		M1876,1565c0,55-45,100-100,100H120c-55,0-100-45-100-100V725c0-55,45-100,100-100h1656c55,0,100,45,100,100V1565z"
              />
            </g>
            <line
              opacity="0.8"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="40"
              strokeMiterlimit="10"
              x1="1873"
              y1="20"
              x2="1873"
              y2="440"
            />
            <path
              fill="#EC686D"
              d="M2204.875,196.93c0-31.44-25.175-56.93-56.228-56.93c-23.702,0-43.939,14.872-52.21,35.883
          	c-8.271-21.011-28.507-35.883-52.209-35.883c-31.056,0-56.229,25.489-56.229,56.93c0,0.498,0,3.156,0,4.066
          	c0,47.547,76.142,69.299,108.438,134.192c31.959-64.724,108.77-85.735,108.438-134.192
          	C2204.867,200.086,2204.875,197.428,2204.875,196.93z"
            />
            <line
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="10"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              x1="24"
              y1="1318.333"
              x2="1876"
              y2="1318.333"
            />
            <line
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="10"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              x1="24"
              y1="971.667"
              x2="1876"
              y2="971.667"
            />
          </svg>
        </div>
        <br />
        <h1>REACT-RESPONSIVE-SELECT</h1>
        <h2 className="subh1">
          A customisable, touchable, <b>React select</b> / <b>multi-select</b>{' '}
          form component.
          <br />
          Built with keyboard and screen reader accessibility in mind.
        </h2>
        <br />
        <a
          className="github-button"
          href="https://github.com/benbowes/react-responsive-select"
          data-size="large"
          data-show-count="true"
          aria-label="Star benbowes/react-responsive-select on GitHub"
        >
          Star
        </a>
      </div>
    </div>
  </div>
));
