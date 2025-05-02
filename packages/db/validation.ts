import * as yup from 'yup';

export const userSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
});

export const postSchema = yup.object().shape({
  title: yup.string().required(),
  content: yup.string(),
  published: yup.boolean().default(false),
  authorId: yup.number().required(),
});
