import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming';

/** Logo Ebig — trích từ public/favicon.svg, giữ nguyên tỉ lệ 48×46. */
const logo = `<svg width="20" height="19" viewBox="0 0 48 46" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style="flex:none"><path fill="#863bff" d="M25.946 44.938c-.664.845-2.021.375-2.021-.698V33.937a2.26 2.26 0 0 0-2.262-2.262H10.287c-.92 0-1.456-1.04-.92-1.788l7.48-10.471c1.07-1.497 0-3.578-1.842-3.578H1.237c-.92 0-1.456-1.04-.92-1.788L10.013.474c.214-.297.556-.474.92-.474h28.894c.92 0 1.456 1.04.92 1.788l-7.48 10.471c-1.07 1.498 0 3.579 1.842 3.579h11.377c.943 0 1.473 1.088.89 1.83L25.947 44.94z"/></svg>`;

addons.setConfig({
  // create() không truyền `base` → tự kế thừa light/dark theo hệ điều hành.
  theme: create({
    // brandImage bỏ trống ⇒ brandTitle được render dưới dạng HTML.
    brandTitle: `<span style="display:inline-flex;align-items:center;gap:8px;font-weight:700;font-size:15px;letter-spacing:-0.01em">${logo}Ebig</span>`,
    brandUrl: './',
    brandTarget: '_self',
  }),
});
