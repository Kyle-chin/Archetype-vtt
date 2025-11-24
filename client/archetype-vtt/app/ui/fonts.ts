import { Inter, Lusitana, Stack_Sans_Notch } from 'next/font/google';
 
export const inter = Inter({ subsets: ['latin'] });

export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const stack_sans_notch = Stack_Sans_Notch({
    variable: '--font-stack-sans-notch',
    subsets: ['latin'],
    style: 'normal',    
})