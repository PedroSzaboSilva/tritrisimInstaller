import { Configuration } from './utils/InstallerConfiguration';

export const defaultConfiguration: Configuration = {
  version: 1,
  publishers: [
    {
      name: 'Fenix',
      key: 'fenix',
      logoUrl: 'https://raw.githubusercontent.com/PedroSzaboSilva/Images/refs/heads/main/fenix.ico',
      defs: [
        {
          kind: 'addonCategory',
          key: 'aircraft',
          title: 'Aircraft',
        },
        {
          kind: 'externalApp',
          key: 'mcdu-server',
          prettyName: 'MCDU Server',
          detectionType: 'ws',
          url: 'ws://localhost:8380',
        },
        {
          kind: 'externalApp',
          key: 'simbridge-app',
          prettyName: 'SimBridge',
          detectionType: 'http',
          url: 'http://localhost:8380/health',
          killUrl: 'http://localhost:8380/health/kill',
          killMethod: 'GET',
        },
        {
          kind: 'externalApp',
          key: 'msfs',
          prettyName: 'MSFS',
          detectionType: 'tcp',
          port: 500,
        },
      ],
      addons: [
        {
          key: 'A319-100',
          name: 'A319-100',
          repoOwner: 'tritrisiminstaller',
          repoName: 'aircraft',
          category: '@aircraft',
          aircraftName: 'A319-100',
          titleImageUrl: 'https://github.com/PedroSzaboSilva/Images/blob/main/A319.png?raw=true',
          titleImageUrlSelected: 'https://github.com/PedroSzaboSilva/Images/blob/main/A319_LIGHT.png?raw=true ',
          enabled: true,
          // TODO: Change this
          backgroundImageUrls: ['https://github.com/PedroSzaboSilva/Images/blob/main/FenixA319Fire.png?raw=true'],
          shortDescription: 'A319-100',
          description:
            'The 737 (classic) is one of the most built airplane in the world ' +
            'by Boeing. This modification can make your airplane spark in case of ' +
            'a belly landing and also crash animations if it crashes. ' +
            '(the PurePower PW1100G-JM from Pratt and Whitney and the LEAP-1A from CFM International) ' +
            'and features large, fuel-saving wingtip devices known as Sharklets.',
          techSpecs: [
            {
              name: 'CFM Variant',
              value: 'CFM56',
            },
            {
              name: 'IAE Variant',
              value: 'IAE V2500',
            },
            {
              name: 'APU',
              value: 'Honeywell 131-9A',
            },
          ],
          targetDirectory: 'fenix-a319-installation',
          alternativeNames: ['FENIX A319', 'fenixA319'],
          tracks: [
            {
              name: 'Public Build',
              key: 'fenixa319',
              url: 'https://flybywirecdn.com/addons/a32nx/stable',
              alternativeUrls: [
                'external/a32nx/stable',
                // move bunnycdn users to cloudflare
                'https://cdn.flybywiresim.com/addons/a32nx/stable',
              ],
              description:
                'Stable is our variant that has the least bugs and best performance. ' +
                'This version will not always be up to date but we guarantee its compatibility ' +
                'with each major patch from MSFS.',
              isExperimental: false,
              releaseModel: {
                type: 'fragmenter',
              },
            },
            {
              name: 'Crash Animation V1',
              key: 'fenixa319-dev',
              url: 'https://flybywirecdn.com/addons/a32nx/master',
              alternativeUrls: [
                // move old experimental users over to dev
                'https://cdn.flybywiresim.com/addons/a32nx/cfbw-cap',
                'https://cdn.flybywiresim.com/addons/a32nx/cfbw',
                'external/a32nx/master',
                // move bunnycdn users to cloudflare
                'https://cdn.flybywiresim.com/addons/a32nx/master',
                // move exp users to dev
                'https://flybywirecdn.com/addons/a32nx/experimental',
                'external/a32nx/experimental',
                'https://cdn.flybywiresim.com/addons/a32nx/experimental',
                'https://github.com/flybywiresim/a32nx/releases/download/assets/experimental/',
              ],
              description:
                'Development will have the latest features that will end up in the next stable. ' +
                "Although every change is QA-tested, bugs are a little more likely. It updates whenever something is added to the 'master' " +
                'branch on Github. Please visit our discord for support.',
              isExperimental: false,
              releaseModel: {
                type: 'fragmenter',
              },
            },
          ],
          incompatibleAddons: [
            // title: the exact title as it appears in the manifest.json
            // creator: the exact creator as it appears in the manifest.json
            // packageVersion syntax follows: https://www.npmjs.com/package/semver
            // description: a short description of why the addon is incompatible
          ],
          myInstallPage: {
            links: [
              {
                url: 'https://docs.flybywiresim.com/',
                title: 'Documentation',
              },
            ],
            directories: [
              {
                location: {
                  in: 'packageCache',
                  path: 'work',
                },
                title: 'Work Folder',
              },
            ],
          },
          disallowedRunningExternalApps: ['@/msfs', '@/mcdu-server'],
        },
      ],
      buttons: [
        {
          text: 'Documentation',
          action: 'openBrowser',
          url: 'https://docs.flybywiresim.com/',
        },
        {
          text: 'Website',
          action: 'openBrowser',
          url: 'https://flybywiresim.com/',
        },
        {
          text: 'Discord',
          action: 'openBrowser',
          url: 'https://discord.gg/eGxWjHHQNE',
        },
        {
          text: 'Twitter',
          action: 'openBrowser',
          url: 'https://twitter.com/FlyByWireSim',
          inline: true,
        },
      ],
    },
    {
      name: 'FlyByWire',
      key: 'flybywire',
      logoUrl: 'https://raw.githubusercontent.com/PedroSzaboSilva/Images/refs/heads/main/flybywire.ico',
      defs: [
        {
          kind: 'addonCategory',
          key: 'aircraft',
          title: 'Aircraft',
        },
      ],
      addons: [
        {
          key: 'fbwA320neo',
          name: 'A320NEO',
          repoOwner: 'flybywire',
          repoName: 'a320neo',
          category: '@aircraft',
          aircraftName: 'A320 NEO',
          titleImageUrl: 'https://github.com/PedroSzaboSilva/Images/blob/main/A320N.png?raw=true',
          titleImageUrlSelected: 'https://github.com/PedroSzaboSilva/Images/blob/main/A320N_LIGHT.png?raw=true',
          enabled: true,
          backgroundImageUrls: [
            'https://github.com/PedroSzaboSilva/Images/blob/main/fbwA320neoFire.png?raw=true',
          ],
          shortDescription: 'Boeing 747-8I',
          description:
            'The Boeing 747-8 is the largest variant of the 747. ' +
            'It features a thicker and wider wing, allowing it to hold more fuel, as well as raked wingtips. ' +
            'The aircraft, powered by the more efficient General Electric GEnx engines, ' +
            'can carry 467 passengers in a typical three-class configuration, and has a range of 7,730 nautical miles.',
          techSpecs: [
            {
              name: 'Engines',
              value: 'GEnx-2B',
            },
          ],
          targetDirectory: 'salty-747',
          tracks: [
            {
              name: 'Stable',
              key: '74S-stable',
              url: 'https://github.com/saltysimulations/salty-747/releases/download/vinstaller-stable/',
              description:
                'Stable is our variant that has the least bugs and best performance. ' +
                'This version will not always be up to date but we guarantee its compatibility ' +
                'with each major patch from MSFS.',
              isExperimental: false,
              releaseModel: {
                type: 'githubRelease',
              },
            },
            {
              name: 'Development',
              key: '74S-dev',
              url: 'https://github.com/saltysimulations/salty-747/releases/download/vinstaller/',
              description:
                'The development version has all the latest features that will end up in the next stable. ' +
                'You may encounter bugs more frequently.',
              isExperimental: false,
              releaseModel: {
                type: 'githubBranch',
                branch: 'master',
              },
            },
          ],
        },
      ],
      buttons: [
        {
          text: 'Discord',
          action: 'openBrowser',
          url: 'https://discord.gg/S4PJDwk',
        },
        {
          text: 'Twitter',
          action: 'openBrowser',
          url: 'https://twitter.com/Salty_Sim',
          inline: true,
        },
      ],
    },
  ],
};