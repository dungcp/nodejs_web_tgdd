const mongoose = require('mongoose');
const slugify = require('slugify');
const validator = require('validator');

// Sub-schema cho "Cấu hình & bộ nhớ"

const configurationAndMemorySchema = new mongoose.Schema({
  operatingSystem: String,
  processorChip: String,
  cpuSpeed: String,
  gpuChip: String,
  ram: String,
  storageCapacity: String,
  availableStorage: String,
  memoryCard: String,
  contactsCapacity: String,
});
// Sub-schema cho "Camera & màn hình"

const cameraAndDisplaySchema = new mongoose.Schema({
  mainCamera: String,
  rearCameraRecording: [String],
  rearCameraFlash: Boolean,
  rearCamerafeatures: [String],
  frontCameraResolution: String,
  frontCameraFeatures: [String],
  displayTechnology: String,
  screenResolution: String,
  widescreen: String,
  maximumBrightness: String,
  touchScreen: String,
});

// Sub-schema cho "Pin & sạc"

const batteryAndChargingSchema = new mongoose.Schema({
  batteryCapacity: String,
  batteryType: String,
  maximumChargingSupport: String,
  chargerIncluded: String,
  batteryTechnology: [String],
});
// Sub-schema cho "Tiện ích"
const utilitiesSchema = new mongoose.Schema({
  advancedSecurity: [String],
  specialFeatures: [String],
  waterDustResistance: String,
  record: [String],
  Radio: Boolean,
  watchMovie: [String],
  listenMusic: [String],
});

// Sub-schema cho "Kết nối"
const connectivitySchema = new mongoose.Schema({
  mobileNetwork: String,
  sim: String,
  wifi: [String],
  gps: [String],
  bluetooth: String,
  chargingPort: String,
  headphoneJack: String,
  otherConnection: String,
});

// Sub-schema cho "Thiết kế & chất liệu"
const designAndMaterialsSchema = new mongoose.Schema({
  design: String,
  material: String,
  sizeWeight: String,
  releaseDate: String,
  brand: String,
});

const smartphoneSpecificationsSchema = new mongoose.Schema({
  image: String,
  configurationAndMemory: configurationAndMemorySchema,
  cameraAndDisplay: cameraAndDisplaySchema,
  batteryAndCharging: batteryAndChargingSchema,
  utilities: utilitiesSchema,
  connectivity: connectivitySchema,
  designAndMaterials: designAndMaterialsSchema,
});

// Laptop
// Sub-schema cho Bộ xử lý
const processorSchema = new mongoose.Schema({
  cpuTechnology: String,
  multiplier: Number,
  numberThreads: Number,
  cpuSpeed: String,
  maximumSpeed: String,
  cache: String,
});

// Sub-schema cho Bộ nhớ RAM, Ổ cứng
const ramHardDriveSchema = new mongoose.Schema({
  ram: String,
  typeRam: String,
  ramBusSpeed: String,
  maximumRamSupport: String,
  hardDrive: String,
});

// Sub-schema cho Màn hình
const screenSchema = new mongoose.Schema({
  screen: String,
  resolution: String,
  scanningFrequency: String,
  colorCoverage: String,
  displayTech: [String],
});

// Sub-schema cho Đồ họa và Âm thanh
const graphicSoundSchema = new mongoose.Schema({
  screenCard: String,
  soundTechnology: [String],
});

// Sub-schema cho Cổng kết nối & tính năng mở rộng
const portsExpanFeaturesSchema = new mongoose.Schema({
  communicationPort: [String],
  wirelessConnect: [String],
  webcam: String,
  featureDifferent: [String],
  keyboardLight: String,
});

// Sub-schema cho Kích thước & khối lượng
const sizeWeightSchema = new mongoose.Schema({
  size: String,
  netWeight: String,
  material: String,
});
// Sub-schema cho Thông tin khác

const otherInfoSchema = new mongoose.Schema({
  batteryInfo: String,
  chargerCapacity: String,
  operatingSystem: String,
  year: String,
});

const laptopSpecificationsSchema = new mongoose.Schema({
  image: String,
  processor: processorSchema,
  ramHardDrive: ramHardDriveSchema,
  screen: screenSchema,
  graphicSound: graphicSoundSchema,
  portsExpanFeatures: portsExpanFeaturesSchema,
  sizeWeight: sizeWeightSchema,
  otherInfo: otherInfoSchema,
});

// Watch

// Sub-schema cho Màn hình

const screenWatchSchema = new mongoose.Schema({
  displayTechnology: String,
  screenSize: String,
  resolution: String,
  faceSize: String,
});

// Sub-schema cho Thiết kế

const designWatchSchema = new mongoose.Schema({
  surfaceMaterial: String,
  frameMaterial: String,
  material: String,
});

// Sub-schema cho Tiện ích

// Sub-schema cho Pin

// Sub-schema cho Cấu hình & Kết nối

// Sub-schema cho Thông tin khác

const reviewSchema = new mongoose.Schema({
  user: {
    type: String,
    required: [true, 'User name is required'],
    validate: {
      validator: function (value) {
        return validator.isAlphanumeric(value, 'en-US', { ignore: ' ' });
      },
      message: 'User name can only contain letters and numbers.',
    },
  },
  rating: {
    type: Number,
    required: [true, 'Rating is required'],
    min: [1, 'Rating must be at least 1'],
    max: [5, 'Rating must not exceed 5'],
  },
  title: {
    type: String,
  },
  content: {
    type: String,
    required: [true, 'Content is required'],
  },
});

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A product must have a name'],
    unique: true,
  },
  src: {
    type: String,
    required: [true, 'A product must have a src'],
  },
  technique: {
    type: String,
  },
  size: {
    type: String,
  },
  category: {
    type: String,
    required: [true, 'A product must have a category'],
    enum: ['smartphone', 'laptop', 'watch'],
  },
  isOnlineOnly: {
    type: Boolean,
  },
  price: {
    original: {
      type: Number,
      required: [true, 'Original price is required'],
    },
    discounted: {
      type: Number,
      required: [true, 'Discounted price is required'],
    },
    currency: {
      type: String,
      required: [true, 'Currency is required'],
      default: 'VND',
    },
  },
  rating: {
    type: Number,
  },
  highlightImages: [
    {
      src: {
        type: String,
        required: [true, 'Image source is required'],
      },
      alt: {
        type: String,
      },
    },
  ],
  angleImages: [
    {
      src: {
        type: String,
        required: [true, 'Image angle source is required'],
      },
      alt: {
        type: String,
      },
    },
  ],
  storageOptions: {
    type: [String],
    validate: {
      validator: function (v) {
        // Kiểm tra nếu category là 'smartphone', mảng phải không rỗng
        return (
          this.category !== 'smartphone' || (Array.isArray(v) && v.length > 0)
        );
      },
      message: 'Storage options are required for smartphones.',
    },
  },
  colorOptions: {
    type: [String],
    validate: {
      validator: function (v) {
        // Kiểm tra nếu category là 'smartphone' hoặc 'watch', mảng phải không rỗng
        return (
          (this.category !== 'smartphone' && this.category !== 'watch') ||
          (Array.isArray(v) && v.length > 0)
        );
      },
      message: 'Color options are required for smartphones and watches.',
    },
  },
  resolution: {
    type: String,
  },
  promotions: [String],
  accessories: [String],
  reviews: [reviewSchema],
});
