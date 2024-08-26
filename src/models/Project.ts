import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  url: {
    type: String,
    require: true,
  },
  title: {
    type: String,
    require: true,
  },
  subtitle: {
    type: String,
  },
  status_bar: [
    {
      name: {
        type: String,
      },
      value: {
        type: String,
      },
    },
  ],
  creationDate: {
    type: Date,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  introduction: {
    type: String,
    require: true,
  },
  image: {
    url: {
      type: String,
    },
    subtitle: {
      type: String,
    },
  },
  video: String,
  paragraphs: [
    {
      type: {
        type: String,
        require: true,
      },
      value: {
        type: String,
      },
      url: {
        type: String,
      },
      subtitle: {
        type: String,
      },
      width: {
        type: Number,
      },
    },
  ],
  tags: [
    {
      type: String,
      required: true,
    },
  ],
  createAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Project || mongoose.model('Project', projectSchema);
