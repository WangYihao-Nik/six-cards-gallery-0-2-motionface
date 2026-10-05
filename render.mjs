import {bundle} from '@remotion/bundler';
import {selectComposition, renderStill, renderMedia, openBrowser} from '@remotion/renderer';
import path from 'node:path';
import {existsSync} from 'node:fs';

const browserCandidates = [
  path.resolve('../../65_skill_broll/node_modules/.remotion/chrome-headless-shell/win64/chrome-headless-shell-win64/chrome-headless-shell.exe'),
  path.resolve('../node_modules/.remotion/chrome-headless-shell/win64/chrome-headless-shell-win64/chrome-headless-shell.exe'),
];
const browserExecutable = browserCandidates.find(existsSync);
const serveUrl = await bundle({entryPoint:path.resolve('src/index.tsx')});
const browser = await openBrowser('chrome', browserExecutable ? {browserExecutable,chromiumOptions:{gl:'angle'}} : {});
try {
  const composition = await selectComposition({serveUrl,id:'GalleryOpening',puppeteerInstance:browser});
  if (process.argv.includes('--video')) {
    await renderMedia({composition,serveUrl,codec:'h264',outputLocation:'out/GalleryOpening.mp4',muted:true,puppeteerInstance:browser,concurrency:3,crf:17,x264Preset:'medium'});
  } else {
    const frames=process.argv.slice(2).filter(x=>/^\d+$/.test(x)).map(Number);
    for(const frame of frames.length?frames:[0,15,30,45,62]) await renderStill({composition,serveUrl,frame,output:path.resolve(`out/check-${frame}.png`),puppeteerInstance:browser});
  }
} finally {await browser.close({silent:true});}
