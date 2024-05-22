// package imports
import React from 'react';

// component imports
import {
  Breadcrumb as BaseBreadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/shared/components/ui/breadcrumb';

// component types
type BreacrumbItem = {
  id: number | string;
  breadcrumbLink: React.ReactNode;
};

type IProps = {
  breadcrumbData: BreacrumbItem[];
  separator: JSX.Element | string;
};

const Breadcrumb: React.FC<IProps> = ({ breadcrumbData, separator }) => {
  return (
    <BaseBreadcrumb>
      <BreadcrumbList>
        {breadcrumbData.map((breadcrumb, index) => (
          <React.Fragment key={breadcrumb.id}>
            <BreadcrumbItem>
              <BreadcrumbLink>{breadcrumb.breadcrumbLink}</BreadcrumbLink>
            </BreadcrumbItem>

            {index < breadcrumbData.length - 1 && (
              <BreadcrumbSeparator>{separator}</BreadcrumbSeparator>
            )}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </BaseBreadcrumb>
  );
};

export default Breadcrumb;
