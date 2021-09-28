import { Pool } from 'pg'

const connectionString = 'postgres://zoduffra:lb_SvYZrJ1JUaNf_qRBlzvSZCK1cpDTS@kesavan.db.elephantsql.com/zoduffra'

const db = new Pool({ connectionString })

export default db