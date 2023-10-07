import * as React from 'react';
import Link from 'next/link';

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from '../ui/context-menu';
export function SiteLogo() {
  return (
    <ContextMenu>
      <ContextMenuTrigger>
        <Link
          href='/'
          className='font-cal text-muted-foreground hover:text-foreground'
        >
          OverDocs
        </Link>
      </ContextMenuTrigger>
      {/* <ContextMenuContent>
        <ContextMenuItem asChild>
          <a href='/assets/logos/OpenStatus.svg' download='openstatus.svg'>
            Download SVG
          </a>
        </ContextMenuItem>
      </ContextMenuContent> */}
    </ContextMenu>
  );
}
