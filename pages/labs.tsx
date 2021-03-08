/**
 * Copyright 2020 Vercel Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


import Page from '@components/page';
import Header from '@components/header';
import Layout from '@components/layout';

import { META_DESCRIPTION } from '@lib/constants';

export default function ExpoPage() {
  const meta = {
    title: 'Labs - SLOConf',
    description: META_DESCRIPTION
  };

  return (
    <Page meta={meta}>
      <Layout>
        <Header hero="Hands-on Labs" description={meta.description} />
        <h2>Some Lab Ideas/Topics (Crowdsourced)</h2>
        <ul>
          <li>SLO-driven continuous delivery with Keptn (@grabnerandi)</li>
          <li>SLO-driven auto-remediation with Keptn (@grabnerandi / @jetzlstorfer)</li>
          <li>SLO-driven resilience engineering with Keptn (@jetzlstorfer)</li>
        </ul>
        <p>General input: google codelabs gives a great experience for delivering labs/hands-on exercises. We are using this currently for our tutorials in our project.</p>
        <p>Lab Planning Meeting: Thursday, March 11, 2021 9:00 AM - 10:00 am (PT) { } <a href='https://nobl9.zoom.us/j/99692135092?pwd=UUpsaENOVmllcEQ0cnBWdi9PVHJCZz09'>Zoom Details</a></p>
      </Layout>
    </Page>
  );
}


