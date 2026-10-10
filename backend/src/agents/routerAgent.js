export function routeIntent(input=''){
 const q=input.toLowerCase();
 if(q.includes('resume')||q.includes('cv')) return 'career'; if(q.includes('startup')||q.includes('business')) return 'startup';
 if(q.includes('research')||q.includes('paper')||q.includes('pdf')) return 'research'; if(q.includes('task')||q.includes('project')) return 'project';
 if(q.includes('learn')||q.includes('roadmap')||q.includes('skill')) return 'learning'; return 'general';
}
