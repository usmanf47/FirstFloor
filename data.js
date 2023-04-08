var APP_DATA = {
  "scenes": [
    {
      "id": "0-1",
      "name": "1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 375,
      "initialViewParameters": {
        "yaw": -0.1971188716671275,
        "pitch": 0.1919346563443085,
        "fov": 1.3934346732050444
      },
      "linkHotspots": [
        {
          "yaw": -1.034295941782677,
          "pitch": 0.02887338025285402,
          "rotation": 0,
          "target": "1-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-2",
      "name": "2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 375,
      "initialViewParameters": {
        "yaw": -2.7992484703097666,
        "pitch": 0.1620737479629728,
        "fov": 1.3934346732050444
      },
      "linkHotspots": [
        {
          "yaw": 0.24147847918417042,
          "pitch": 0.07211106837137216,
          "rotation": 0,
          "target": "0-1"
        },
        {
          "yaw": -0.7068333253820214,
          "pitch": 0.11071611710778484,
          "rotation": 0,
          "target": "2-3"
        },
        {
          "yaw": -2.368324346114118,
          "pitch": 0.10989460630158909,
          "rotation": 0,
          "target": "3-4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-3",
      "name": "3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.052188340958974,
          "pitch": 0.2558529433102379,
          "rotation": 0,
          "target": "0-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-4",
      "name": "4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.3374555363404745,
          "pitch": 0.11930269830847706,
          "rotation": 4.71238898038469,
          "target": "0-1"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "First Floor ",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
