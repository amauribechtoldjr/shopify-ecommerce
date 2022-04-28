import { FC } from 'react'
import { InferGetStaticPropsType } from 'next'

export type PageProps<T> = FC<InferGetStaticPropsType<T>>
