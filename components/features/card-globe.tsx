import Link from 'next/link';

import { Button } from '../ui/button';

import { cardConfig } from '@/config/features';
import {
  CardContainer,
  CardContent,
  CardFeature,
  CardFeatureContainer,
  CardHeader,
  CardIcon,
  CardTitle,
} from '../ui/card';
import { Globe } from './globe';

export function MonitoringCard() {
  const { icon, title, features } = cardConfig.monitors;
  return (
    <CardContainer>
      <CardHeader>
        <CardIcon icon={icon} />
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Globe />
        <CardFeatureContainer>
          {features?.map((feature, i) => (
            <CardFeature key={i} {...feature} />
          ))}
          <div className='text-center'>
            <Button asChild variant='outline' className='rounded-full'>
              <Link href='/play/checker'>Contribute now!</Link>
            </Button>
          </div>
        </CardFeatureContainer>
      </CardContent>
    </CardContainer>
  );
}
