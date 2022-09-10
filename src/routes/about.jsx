import React from 'react'

import { Layout } from '../components/layout'
import { Article, ArticleContent, ArticleMedia } from '../components/article'

export default function AboutPage() {
  return (
    <Layout>
      <Article>
        <ArticleContent title="About">
          <p>
            Webtest.engineeruncle.in is subdomain of a web consultancy run by engineeruncle.in for client's SOP.
          </p>
          <p>
          Webel Bhavan Block: EP & GP, Sector V, Bidhannagar, Salt Lake, Kolkata: 700 091. Telephone: +91 33 2339 2234 / 2339 2228 / 2339 2337
          </p>
          <p>EngineerUncle.in | Gigaai.in</p>
        </ArticleContent>

        <ArticleMedia>
          <img
            src="https://picsum.photos/420/640?grayscale"
            alt="Lorem Picsum"
          />
        </ArticleMedia>
      </Article>
    </Layout>
  )
}
