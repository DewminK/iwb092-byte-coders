import React, { useState } from 'react';
import Select from 'react-select';
import './compare.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faCamera, faMobileAlt, faHdd, faMemory, faBatteryFull, faWeightHanging } from '@fortawesome/free-solid-svg-icons';

const phoneList = [
  {
    name: "iPhone 16 Pro Max",
    videoSrc: "https://www.apple.com/105/media/ww/iphone/family/2024/cf19f185-dd7e-4350-97ff-e44860713b54/anim/welcome/large_2x.mp4",
    specs: { price: "$1,199", resolution: "6.7-inch 2796 x 1290 px", screenSize: "6.7 inches Super Retina XDR display", storage: "128GB to 1TB", ram: "8 GB", battery: "4400 mAh", weight: "7.7 ounces" }
  },
  {
    name: "Galaxy S24 Ultra",
    videoSrc: "https://images.samsung.com/in/smartphones/galaxy-s24-ultra/videos/galaxy-s24-ultra-highlights-form-factor.webm?imbypass=true",
    specs: { price: "$1,299", resolution: "6.8-inch 3088 x 1440 px", screenSize: "6.8 inches AMOLED 2X display", storage: "256GB-1TB", ram: "12 GB", battery: "5000 mAh", weight: "8.1 ounces" }
  },
  {
    name: "Google Pixel 8 Pro",
    videoSrc: "https://storage.googleapis.com/mannequin/blobs/503e2730-0d4c-4071-ba66-dee0cfa726fd.webm",
    specs: { price: "$999", resolution: "6.7-inch 2992 x 1344 px", screenSize: "6.7 inches LTPO OLED", storage: "128GB to 512GB", ram: "12 GB", battery: "5050 mAh", weight: "7.9 ounces" }
  },
  {
    name: "OnePlus 11 Pro",
    videoSrc: "https://www.oneplus.com/global/oneplus11/assets/video/oneplus11_hero_video_9s8h.mp4",
    specs: { price: "$899", resolution: "6.7-inch 3216 x 1440 px", screenSize: "6.7 inches AMOLED", storage: "128GB to 512GB", ram: "8 GB to 16 GB", battery: "5000 mAh", weight: "8.0 ounces" }
  },
  {
    name: "Pixel 13 Pro",
    videoSrc: "https://storage.googleapis.com/mannequin/blobs/e2c407f1-a670-43f7-9eba-3417a2926f49.webm",
    specs: { price: "$1,099", resolution: "6.73-inch 3200 x 1440 px", screenSize: "6.73 inches AMOLED", storage: "256GB to 512GB", ram: "12 GB", battery: "4820 mAh", weight: "8.1 ounces" }
  },
  {
    name: "Sony Xperia 1 V",
    videoSrc: "https://www.sony.com/image/d1f8c30f4ef63d22f00f3f313009d320?fmt=jpeg&wid=900&hei=900",
    specs: { price: "$1,199", resolution: "6.5-inch 3840 x 1644 px", screenSize: "6.5 inches OLED", storage: "256GB", ram: "12 GB", battery: "5000 mAh", weight: "6.9 ounces" }
  },
];

const Compare = () => {
  const [selectedPhone1, setSelectedPhone1] = useState(phoneList[0]);
  const [selectedPhone2, setSelectedPhone2] = useState(phoneList[1]);

  const handlePhoneChange1 = (selectedOption) => {
    const selected = phoneList.find(phone => phone.name === selectedOption.value);
    setSelectedPhone1(selected);
  };

  const handlePhoneChange2 = (selectedOption) => {
    const selected = phoneList.find(phone => phone.name === selectedOption.value);
    setSelectedPhone2(selected);
  };

  return (
    <div className="compare-page">
      <h2>EXPLORE AND COMPARE</h2>
      
      <div className="phone-selection">
        <Select
          options={phoneList.map(phone => ({ value: phone.name, label: phone.name }))}
          onChange={handlePhoneChange1}
          defaultValue={{ label: selectedPhone1.name, value: selectedPhone1.name }}
          className="select-phone"
          placeholder="Select Phone 1"
          theme={(theme) => ({
            ...theme,
            colors: {
              ...theme.colors,
              primary25: 'black',
              primary: 'black',
              neutral0: 'black',
              neutral80: 'white',
            },
          })}
          styles={{
            control: (styles) => ({
              ...styles,
              backgroundColor: 'black',
              borderColor: 'grey',
              color: 'white',
            }),
            singleValue: (styles) => ({
              ...styles,
              color: 'white',
            }),
            menu: (styles) => ({
              ...styles,
              backgroundColor: 'black',
            }),
            option: (styles, { isFocused }) => ({
              ...styles,
              backgroundColor: isFocused ? 'grey' : 'black',
              color: 'white',
            }),
          }}
        />

        <Select
          options={phoneList.map(phone => ({ value: phone.name, label: phone.name }))}
          onChange={handlePhoneChange2}
          defaultValue={{ label: selectedPhone2.name, value: selectedPhone2.name }}
          className="select-phone"
          placeholder="Select Phone 2"
          theme={(theme) => ({
            ...theme,
            colors: {
              ...theme.colors,
              primary25: 'black',
              primary: 'black',
              neutral0: 'black',
              neutral80: 'white',
            },
          })}
          styles={{
            control: (styles) => ({
              ...styles,
              backgroundColor: 'black',
              borderColor: 'grey',
              color: 'white',
            }),
            singleValue: (styles) => ({
              ...styles,
              color: 'white',
            }),
            menu: (styles) => ({
              ...styles,
              backgroundColor: 'black',
            }),
            option: (styles, { isFocused }) => ({
              ...styles,
              backgroundColor: isFocused ? 'grey' : 'black',
              color: 'white',
            }),
          }}
        />
      </div>

      <div className="compare-header">
        <div className="product">
          <video width="1000" height="1200" loop autoPlay muted key={selectedPhone1.name}>
            <source src={selectedPhone1.videoSrc} type="video/mp4" />
            <source src={selectedPhone1.videoSrc} type="video/webm" />
            Your browser does not support the video tag.
          </video>
          <h2>{selectedPhone1.name}</h2>
        </div>

        <div className="vs">
          <h1>VS</h1>
        </div>

        <div className="product">
          <video width="1000" height="1200" loop autoPlay muted key={selectedPhone2.name}>
            <source src={selectedPhone2.videoSrc} type="video/mp4" />
            <source src={selectedPhone2.videoSrc} type="video/webm" />
            Your browser does not support the video tag.
          </video>
          <h2>{selectedPhone2.name}</h2>
        </div>
      </div>

      <div className="compare-table">
        {Object.keys(selectedPhone1.specs).map((key) => (
          <div className="feature" key={key}>
            <div className="feature-value">{selectedPhone1.specs[key]}</div>
            <div className="feature-title">
              <FontAwesomeIcon icon={getIconByFeature(key)} />
              <span className="feature-title-text">{capitalizeFirstLetter(key)}</span>
            </div>
            <div className="feature-value">{selectedPhone2.specs[key]}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const getIconByFeature = (feature) => {
  switch (feature) {
    case 'price':
      return faDollarSign;
    case 'resolution':
      return faCamera;
    case 'screenSize':
      return faMobileAlt;
    case 'storage':
      return faHdd;
    case 'ram':
      return faMemory;
    case 'battery':
      return faBatteryFull;
    case 'weight':
      return faWeightHanging;
    default:
      return null;
  }
};

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export default Compare;
