'use client';

import React from 'react';
import {
  useForm,
  SubmitHandler,
  Controller,
  ControllerRenderProps,
  FieldValues,
  Path,
} from 'react-hook-form';
import { sendFormData, FormData } from '@/lib/contact-form';
import { motion } from 'framer-motion';
import Link from 'next/link';

const ContactForm = () => {
  const { control, handleSubmit, reset } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    console.log('ESSA');
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=' flex flex-col mt-2 gap-3 justify-center w-full max-w-[30rem] '>
      <Controller
        name='yourName'
        control={control}
        defaultValue=''
        rules={{ required: true }}
        render={({ field }) => (
          <Input field={field} type='text' placeholder='Imię i nazwisko' />
        )}
      />
      <Controller
        name='yourEmail'
        control={control}
        defaultValue=''
        render={({ field }) => (
          <Input field={field} type='email' placeholder='Twój e-mail' />
        )}
      />
      <Controller
        name='yourPhone'
        control={control}
        defaultValue=''
        render={({ field }) => (
          <Input field={field} type='text' placeholder='Twoj numer telefonu' />
        )}
      />

      <p className='text-xs text-center lg:text-left'>
        Zapisując się akceptujesz{' '}
        <Link
          href='/polityka-prywatnosci'
          className='text-[var(--main-page-color)] font-semibold'>
          politykę prywatności.
        </Link>
      </p>
      <div className='flex justify-center mt-2 '>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 300 }}
          type='submit'
          className='bg-[var(--main-page-color)] text-[var(--text-white-1)] px-2 py-3 rounded-md font-bold text-xs lg:text-base'>
          Zapisz się na kurs
        </motion.button>
      </div>
    </form>
  );
};

export default ContactForm;

type InputProps<T extends FieldValues, K extends Path<T>> = {
  field: ControllerRenderProps<T, K>;
  type: string;
  placeholder: string;
};

const Input = <T extends FieldValues, K extends Path<T>>({
  field,
  type,
  placeholder,
}: InputProps<T, K>) => {
  return (
    <input
      {...field}
      type={type}
      className='px-2 py-2 shadow-2xl'
      placeholder={placeholder}
    />
  );
};
