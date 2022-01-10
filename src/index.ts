import 'module-alias/register'
import server from './server'

server.listen(server.get('port'), () => {
    console.log(`⬢ Evolution Nutrition - ${server.get('mode')}`)
    console.log(`◌ listening on ${server.get('url')}`)
    console.log(`v${server.get('version')}`)
})
