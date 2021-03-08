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
    title: 'About - SLOConf',
    description: META_DESCRIPTION
  };

  return (
    <Page meta={meta}>
      <Layout>
        <Header hero="About SLOConf" description={meta.description} />
        <h2>Intro</h2>
        <p>The world wants to share and learn about SLOs. And who am I to stop them? Building on the success of the Beyond Seattle SRE Meetup, we are considering a virtual event that will educate and connect engineers, practitioners, and interested parties to learn and share.</p>
        <h2>Format</h2>
        <ul>
          <li>Call for presentations: 5-10 minute pre-recorded videos, curated by program committee</li>
          <li>Slack discussion area (hosted by Beyond Seattle SRE Meetup)</li>
          <li>Self Directed Hands-on Labs</li>
          <li>Minimal synchronous communication (maybe an optional kickoff/close zoom, live Q&A Panel)</li>
          <li>Maximally inclusive, attend-while-you-work, focused on learning all about Service Level Objectives (and closely related concepts: error budgets, service level indicators [SLIs], Slogicians).</li>
          <li>Strict no sales pitch policy</li>
        </ul>
        <p>Note: SLOConf is not a replacement for also important related big topics like observability or incident response, DevOps, or even SRE. This event is focused on SLOs.</p>
        <h2>Some Talk Ideas/Topics (Crowdsourced)</h2>
        <ul>
          <li>Validating SLI-User happiness correlation, tales from the trenches. (@BartEnkelaar)</li>
          <li>Regression for the Rest of Us, Bayes for Kids Who Don’t Math Good (@the_nickens)</li>
          <li>Just Say No (to Dashboards): you don’t need more information, you need the right information. (@the_nickens)</li>
          <li>No More Theater: Building SLO Culture without the Bullsh*t (@the_nickens)</li>
          <li>How to make non-engineers care about SLOs (@TwitchiH)</li>
          <li>From SLO to enacted Error Budget Policy, a practical guide. (@BartEnkelaar)</li>
          <li>Understanding how to quantify the quality of service in modern systems. (@postwait)</li>
          <li>Stop caring about every single error by setting your SLOs (@LiliCosic)</li>
          <li>Infrastructure comes out of the wall, no one cares how (@TwitchiH)</li>
          <li>The weirdest root causes for customer-facing impacts (@TwitchiH)</li>
          <li>Introduction to SLO alerting (niallm)</li>
          <li>Weaknesses of the SLO model (@niallm)</li>
          <li>Why you, a VP, should adopt SLOs, and what you should use them for (@niallm)</li>
          <li>The state of the Histogram (@heinrichhartman)</li>
          <li>Latency SLOs done right (@heinrichhartman)</li>
          <li>Mathematical aspects of SLO monitoring (@heinrichhartman)</li>
          <li>The SLOs, or There and Back Again (@voidmaze)</li>
          <li>Effective SLO based alerting (@voidmaze)</li>
          <li>Distill your avalanche of metrics to a beautiful fraction of 1 (@alexnauda)</li>
          <li>When SLOs are not enough: how to handle catastrophes (@jhscott)</li>
          <li>GitLab’s journey to SLO Monitoring (@suprememoocow)</li>
          <li>Teaching SRE through SLOs: Empowering Early Career Folks</li>
          <li>Using SLOs as quality gates in your Continuous Delivery (@jetzlstorfer)</li>
          <li>Should SLOs be request-based or time-based? And why neither really works… (@beorn7)</li>
          <li>Inferring and assessing internal consistency of SLOs using distributed traces and critical path analysis (@el_bhs or @save_spoons have been talking about this)</li>
          <li>Cutting down on SLO’s without losing sense of control. A lot of starters like to have too many SLI/SLO’s. Where 80-90% of these provide secondary info. So info to find (root) cause of an incident and do not reflect ‘customer pain’ not inflicted. (Ruud Straver)</li>
          <li>How to move up in the chain: SLO’s from Engineering (system based) dashboards to Product (customer value based) dashboards (Ruud Straver)</li>
          <li>The second side of the coin how to let your business push for innovation if you are not burning (enough) budget (Ruud Straver)</li>
          <li>Production readiness review: Providing a solid base for SLOs (Milan Plzik)</li>
          <li>"SLO Math" – it's the architecture, not the products or infrastructure that matter.  how to think about your dependencies and how their SLOs affect your own. (@stevemcghee)</li>
          <li>Evaluating application resilience with Chaos Engineering and SLOs (@jetzlstorfer)</li>
          <li>Defining cluster SLOs for production-grade Kubernetes (@bbhikkaji)</li>
          <li>SLOs for climate, how to reduce our impact continuously (@bpetit_)</li>
          <li>SLO's are the language of business, learn to share the dialect( Alex Jones)</li>
          <li>SLO are coming to the Fortune 50  (Alex Jones)</li>
        </ul>
      </Layout>
    </Page >
  );
}


