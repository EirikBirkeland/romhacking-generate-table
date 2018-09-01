#!/usr/bin/env perl 
# CREATED: 05. juli 2015 kl. 15.44 +0200
use strict;
use warnings;
use utf8;
use 5.10.1;
use Data::Printer;


say "Please input starting point for [a]: ";

my $lc;
my $uc;
$lc = <> if !$ARGV[0];
$lc = $ARGV[0] if $ARGV[0];
chomp $lc;
$lc = hex($lc);


say "Please input starting point for [A]: ";
$uc = <> if !$ARGV[1];
$uc = $ARGV[1] if $ARGV[1];
chomp $uc;
$uc = hex($uc);
my @lc = ( "a" .. "z" );
my @uc = ( "A" .. "Z" );

for (@lc) {
    my $hex = sprintf( "%x", $lc );
    $hex =~ s/^([0-9a-f]{1})(?![0-9a-f])/0$1/i;
    print "$hex=", $_;	
    print "\n";
    $lc++;
}
for (@uc) {
    my $hex = sprintf( "%x", $uc );
    $hex =~ s/^([0-9a-f]{1})(?![0-9a-f])/0$1/i;
    print "$hex=", $_;
    print "\n";
    $uc++;
}
