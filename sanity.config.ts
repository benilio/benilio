import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { schemaTypes } from './sanity/schemas'
import { visionTool } from '@sanity/vision'

const config = defineConfig({
  projectId: 't7jer303',
  dataset: 'production',
  title: 'Beni`s portfolio',
  apiVersion: '2023-06-02',
  // useCdn: true,
  basePath: '/admin',
  plugins: [deskTool(), visionTool()],
  // , visionTool(), ...(isDev ? devOnlyPlugins : [])
  schema: {
    types: schemaTypes,
  },
})

export default config
