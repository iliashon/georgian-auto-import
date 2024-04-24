/** @type {import('next').NextConfig} */

import Intl from "next-intl/plugin"

const withNextIntl = Intl()

const nextConfig = {};

export default withNextIntl(nextConfig);
