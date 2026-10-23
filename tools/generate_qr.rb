#!/usr/bin/env ruby
# Gera o QR Code oficial do ThermaLoop Lab para impressão.
require 'rqrcode'

url = 'https://marcelbordao-source.github.io/thermaloop-lab/'
qr = RQRCode::QRCode.new(url, level: :h)
output = File.expand_path('../assets/thermaloop-lab-qrcode.svg', __dir__)
File.write(output, qr.as_svg(
  color: '000000', shape_rendering: 'crispEdges',
  module_size: 40, standalone: true, use_path: true
))
