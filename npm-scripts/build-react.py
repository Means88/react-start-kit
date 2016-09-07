# -*- coding:utf-8 -*-
options_help = '''
    -h      显示此帮助
    -d      debug 模式，不加入 hash 值
'''

import getopt
import json
import re
import sys


def render(isDebug=False, template_file=None, input_file=None, output_file=None):
    if input_file is None:
        input_file = "npm-scripts/build.json.log"
    if template_file is None:
        template_file = "bin/template.html"
    if output_file is None:
        output_file = "bin/index.html"

    print "building template...\n"

    template = open(template_file)

    print "\nreading template file..."
    content = template.read().decode('utf-8')
    pattern = re.compile(r'{# ([^#]+) #}')

    print "rendering..."
    if isDebug:
        result = pattern.sub(r'\1.js', content)
    else:
        log = open(input_file)
        msg = json.load(log)
        chunkNames = msg['assetsByChunkName']
        for key in chunkNames:
            print "%s: %s" % (key, chunkNames[key])
        result = pattern.sub(lambda match: chunkNames[match.group(1)], content)

    print "writing..."
    output = open(output_file, "w")
    output.write(result.encode('utf-8'))
    output.close()

    print "\nfinished"


if __name__ == "__main__":
    opts, args = getopt.getopt(sys.argv[1:], "dhi:o:")
    opts = dict(opts)

    if "-h" in opts:
        print options_help
        exit(0)

    isDebug = "-d" in opts
    input_file = opts.get("-i", None)
    output_file = opts.get("-o", None)
    template_file = opts.get("-t", None)
    render(isDebug, template_file, input_file, output_file)
